import './TextCTA.css'

function TextCTA({size = 'medium' }) {
  const fontSizes = {
    medium: '16px',
    large: '20px'
  };


  return (
    <p className='text-cta' style={{ fontSize: fontSizes[size] }}>Введите название фильма, сериала или мультфильма для поиска и добавления в избранное.</p>
  )
}

export default TextCTA