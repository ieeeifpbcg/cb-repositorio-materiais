import styled from 'styled-components';

export const Container = styled.li`
  button {
    border: none;
    position: relative;
    color: #fff;
    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
    border-radius: 4px;
    width: 150px;
    height: 65px;
    font-size: 12px;

    p.nomeDisc {
      margin: auto;
      display: block;
      width: 90px;
    }

    p.idDisc {
      opacity: 0;
      position: absolute;
      top: 2px;
      left: 2px;
    }

    p.cargaHoraria {
      opacity: 0;
      position: absolute;
      bottom: 2px;
      right: 2px;
    }

    p.preReq {
      opacity: 0;
      position: absolute;
      top: 2px;
      right: 2px;
    }
  }
  button:hover {
    transition: 0.2s;
    width: 160px;
    height: 75px;

    p {
      opacity: 1;
    }
  }

  :not(:last-child) {
    margin-bottom: 20px;
  }
`;
