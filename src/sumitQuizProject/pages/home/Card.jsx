import cls from './Home.module.css';

const Card = ({ title, noq, id }) => (
    <div className={cls.card}>
        <div className={cls.card_info}>
            <div>
                <img
                    className={cls.img}
                    src={`http://img.youtube.com/vi/${id}/maxresdefault.jpg`}
                    alt={title}
                />
            </div>
            <div className={cls.body}>
                <h5>{title}</h5>
            </div>
            <div className={cls.footer}>
                <p>{noq} Questions</p>
                <p>Total points :{noq * 5} </p>
            </div>
        </div>
    </div>
);
export default Card;
