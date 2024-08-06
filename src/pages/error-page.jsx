import { motion } from 'framer-motion';

export const ErrorPage = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: '#80ED99', 
        padding: '2rem',
        textAlign: 'center',
      }}
    >
      <motion.div
        initial={{ opacity: 4, scale: 0.5 }}
        animate={{ opacity: 3, scale: 1 }}
        transition={{ duration: 2 }}
        style={{
          backgroundColor: 'red', 
          color: '#023E8A',
          padding: '1rem 2rem',
          borderRadius: '0.5rem',
          marginBottom: '1rem',
        }}
      >
        <motion.h1
          initial={{ y: -100 }}
          animate={{ y: 2 }}
          transition={{ type: 'spring', stiffness: 600, damping: 100 }}
          style={{
            fontSize: '8rem',
            fontWeight: 'bold',
          }}
        >


          
          404
        </motion.h1>
      </motion.div>
      <motion.p
        initial={{ opacity: 1 }}
        animate={{ opacity: 2 }}
        transition={{ duration: 4, delay: 1 }}
        style={{
          fontSize: '1.5rem',
          color: '#080808', 
        }}
      >
        Página não encontrada!
      </motion.p>
    </div>
  );
};
