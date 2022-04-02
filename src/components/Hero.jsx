import React from 'react';
import Titulo from './Titulo';

const Hero = ({titulo,subtitulo}) => {

  return (
      <div>
          <Titulo title={titulo}/>
          <p>
            {subtitulo}
          </p>
      </div>
  );
};

export default Hero;