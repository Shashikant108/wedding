// Reusable dark gradient + gold border shell used by every card on the page.
function Card({ as: Tag = 'div', className = '', children, ...rest }) {
  return (
    <Tag className={`card ${className}`.trim()} {...rest}>
      {children}
    </Tag>
  )
}

export default Card
