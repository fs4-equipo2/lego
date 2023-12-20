import './Card.module.scss'

export function Card({src, title, content, button}){
    return <div className="cardContainer">
       <img src = {src} />
       <h3>{title}</h3>
       <p>
          {content}
        </p>
    </div>
}