
import React, { useState } from 'react';

export default function LexMaticPro() {
  const [fuero, setFuero] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [modelos, setModelos] = useState([]);
  const [loading, setLoading] = useState(false);

  const generarModelos = () => {
    setLoading(true);
    setTimeout(() => {
      setModelos([
        'Modelo de Demanda de Amparo en Salud',
        'Modelo de Demanda Civil por Daños y Perjuicios',
        'Modelo de Demanda Laboral por Despido',
        'Modelo de Denuncia Penal',
      ]);
      setLoading(false);
    }, 2000);
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1>Lex Matic Pro - Abogado IA</h1>

      <div style={{ marginBottom: '10px' }}>
        <label>Selecciona el Fuero: </label>
        <select value={fuero} onChange={(e) => setFuero(e.target.value)}>
          <option value=''>--Seleccione--</option>
          <option value='civil'>Civil</option>
          <option value='familia'>Familia</option>
          <option value='salud'>Salud</option>
          <option value='laboral'>Laboral</option>
          <option value='penal'>Penal</option>
          <option value='amparo'>Amparos / Cautelares</option>
        </select>
      </div>

      <div style={{ marginBottom: '10px' }}>
        <label>Descripción del Caso: </label><br />
        <textarea
          rows='4'
          cols='50'
          value={descripcion}
          onChange={(e) => setDescripcion(e.target.value)}
          placeholder='Describe brevemente el caso...'
        />
      </div>

      <button onClick={generarModelos} disabled={loading}>
        {loading ? 'Generando...' : 'Generar Modelos'}
      </button>

      {modelos.length > 0 && (
        <div style={{ marginTop: '20px' }}>
          <h3>Modelos sugeridos:</h3>
          <ul>
            {modelos.map((modelo, index) => (
              <li key={index}>{modelo}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
