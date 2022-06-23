import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

type Params = {
  boardType: string | undefined;
};

const BoardList = () => {
  const { boardType } = useParams<Params>();
  const [title, setTitle] = useState('');

  useEffect(() => {
    const requestBoard = async (): Promise<void> => {
      try {
        const response = await axios.get(`/json/board.json`);

        if (response && response.status === 200 && response.data) {
          for (const target in response.data) {
            target === boardType ? setTitle(response.data[target].title) : null;
          }
        }
      } catch (ex) {
        console.error('requestBoard error.. ', ex);
      }
    };

    requestBoard();
  }, [boardType]);

  return (
    <div className="board-list">
      <div>{title}</div>
    </div>
  );
};

export default BoardList;
