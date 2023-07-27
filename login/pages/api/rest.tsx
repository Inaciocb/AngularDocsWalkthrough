'use client'
import React, { useEffect, useState } from 'react';

type Dados = {
  id: number;
  nome: string;
  cargo: string;
  idade: number;
};

const MostrarDados: React.FC = () => {
  const [data, setData] = useState<Dados[]>([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:8080/dados/dados');
      if (!response.ok) {
        throw new Error('Erro na resposta');
      }
      const dadosJson = await response.json();
      setData(dadosJson);
    } catch (error) {
      console.error('Erro no fetch:', error);
    }
  };

  return (
    <div>
      <h1>Lista recebida da API</h1>
      <ul>
        {data.map((item) => (
          <li key={item.id}>{item.nome}</li>
        ))}
      </ul>
    </div>
  );
};

export default MostrarDados;
