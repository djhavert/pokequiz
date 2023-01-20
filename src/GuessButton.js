export default function GuessButton({ setSeeResults, streak }) {
  return streak !== 0 ? (
    <button
      className='button is-centered is-light is-primary'
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '30%',
      }}
      onClick={() => setSeeResults(false)}
    >
      Next
    </button>
  ) : (
    <button
      className='button is-centered is-light is-link'
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '30%',
      }}
      onClick={() => setSeeResults(false)}
    >
      New game
    </button>
  );
}
