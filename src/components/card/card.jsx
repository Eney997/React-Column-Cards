import st from './card.module.css'

const Card = ({imgUrl,name,desc,but,span,background}) => {

    return(
        <div style={{background:background}} className={st.box}>
            <img className={st.image} src={imgUrl}></img>
            <h1 className={st.name}>{name}</h1>
            <h2 className={st.desc}>{desc}</h2>
            <button className={st.but}>{but}<span className={st.span}>{span}</span></button>
        </div>
    )
} 

export default Card