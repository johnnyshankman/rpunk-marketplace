import { FC } from 'react'

const Card: FC = ({ children }) => {
  return (
    <article className="col-span-full border border-gray-300 bg-white p-6 dark:border-neutral-600 dark:bg-black">
      {children}
    </article>
  )
}

export default Card
