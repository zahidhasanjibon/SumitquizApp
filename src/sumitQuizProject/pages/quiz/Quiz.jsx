import { getDatabase, ref, set } from 'firebase/database';
import _ from 'lodash';
import { useEffect, useReducer, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import { useAuth } from '../../contexts/AuthContext';
import useQuestions from '../../hook/useQuestions';
import cls from '../../style/Quiz.module.css';
import Answers from './Answers';
import MiniPlayer from './MiniPlayer';
import ProgressBar from './ProgressBar';

const initialState = null;
const reducer = (state, action) => {
    switch (action.type) {
        case 'questions': {
            action.value.forEach((ques) => {
                ques.options.forEach((option) => {
                    // eslint-disable-next-line no-param-reassign
                    option.checked = false;
                });
            });
            return action.value;
        }
        case 'answer': {
            const newQuestions = _.cloneDeep(state);
            newQuestions[action.questionID].options[action.optionIndex].checked = action.value;
            return newQuestions;
        }

        default:
            return state;
    }
};

const Quiz = () => {
    const { id } = useParams();
    const [currQues, setCurrQues] = useState(0);
    const { questions, loading, error } = useQuestions(id);

    const [qna, dispatch] = useReducer(reducer, initialState);
    const { currentUser } = useAuth();
    const history = useHistory();
    const { location } = history;
    const { state } = location;
    const { videoTitle } = state;

    useEffect(() => {
        dispatch({
            type: 'questions',
            value: questions
        });
    }, [questions]);

    // checkbox function handler
    function handleAnswerChange(e, index) {
        dispatch({
            type: 'answer',
            questionID: currQues,
            optionIndex: index,
            value: e.target.checked
        });
    }

    // next questions function handler
    function nextQuestion() {
        if (currQues < questions.length) {
            setCurrQues((prev) => prev + 1);
        }
    }
    // prevoius questions function handler
    function previousQuestion() {
        if (currQues - 1 >= 0 && currQues < questions.length) {
            setCurrQues((prev) => prev - 1);
        }
    }

    // submit handler function
    async function submit() {
        const { uid } = currentUser;
        const db = getDatabase();
        const resultRef = ref(db, `result/${uid}`);
        await set(resultRef, {
            [id]: qna
        });
        history.push({
            pathname: `/result/${id}`,
            state: { qna }
        });
    }

    // calculate percentage
    const percentage = questions.length > 0 ? ((currQues + 1) / questions.length) * 100 : 0;

    return (
        <>
            {loading && <div>Loading ...</div>}
            {error && <div>There was an error!</div>}
            {!loading && !error && qna && qna.length > 0 && (
                <>
                    <div className={cls.quizContainer}>
                        <p>{qna[currQues].title}</p>
                        <h4>Question can have multiple answer</h4>
                        <Answers
                            input
                            options={qna[currQues].options}
                            handleChange={handleAnswerChange}
                        />
                        <ProgressBar
                            nextFunc={nextQuestion}
                            prevFunc={previousQuestion}
                            submitFunc={submit}
                            progress={percentage}
                        />
                        <MiniPlayer id={id} title={videoTitle} />
                    </div>
                </>
            )}
        </>
    );
};
export default Quiz;
