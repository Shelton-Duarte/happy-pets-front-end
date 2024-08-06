


export const ErrorPage = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: '#FEE440', 
        padding: '2rem',
        textAlign: 'center',
      }}
    >
      <div
        style={{
          backgroundColor: '#023E8A', 
          color: '#FFFFFF',
          padding: '1rem 2rem',
          borderRadius: '0.5rem',
          marginBottom: '1rem',
        }}
      >
        <h1
          style={{
            fontSize: '4rem',
            fontWeight: 'bold',
          }}
        >
          404
        </h1>
      </div>
      <p
        style={{
          fontSize: '1.5rem',
          color: '#7F7F7F', 
        }}
      >
        Página não encontrada!
      </p>
    </div>
  );
};
