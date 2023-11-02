import { ThumbsUp, Trash } from 'phosphor-react'
import styles from './Comment.module.css'
import { Avatar } from './Avatar'

export function Comment({ content, onDeleteComment}) {

  function handleDeleteComment() {
    onDeleteComment(content)
  }

  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/sousafernando1.png"/>

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Fernando Sousa</strong>
              <time title="25 de outubro às 19:18" dateTime="2023-10-25 19:18:25">Cerca de 1h atrás</time>
            </div>
            <button onClick={handleDeleteComment} title="Deletar comentário">
              <Trash size={24}/>
            </button>
          </header>
          <p>{content}</p>
        </div>
        <footer>
          <button>
            <ThumbsUp />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  )
}