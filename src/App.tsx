import { Post } from './components/Post'
import { Header } from './components/Header'
import { Sidebar } from './components/Siderbar'

import styles from './App.module.css'

import './global.css'

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/sousafernando1.png',
      name: 'Fernando Sousa',
      role: 'Software Engineer'
    },
    content: [
      { type: 'paragraph', content: 'Bom dia!'},
      { type: 'paragraph', content: 'Esse é meu primeiro post aqui no projeto'},
      { type: 'link', content: 'github.com/sousafernando1'}, 
    ],
    publishedAt: new Date('2023-10-27 20:14:00')
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/sousafernando1.png',
      name: 'Maria Eduarda',
      role: 'Software Engineer'
    },
    content: [
      { type: 'paragraph', content: 'Bom dia!'},
      { type: 'paragraph', content: 'Esse é meu segundo post aqui no projeto'},
      { type: 'link', content: 'github.com/sousafernando1'}, 
    ],
    publishedAt: new Date('2023-10-28 20:14:00')
  }
]

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
              <Post 
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      </div>
    </div>
    
  ) 
}