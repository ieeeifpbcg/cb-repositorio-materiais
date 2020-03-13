import styled from 'styled-components';

export const Wrapper = styled.li`
  width: 174px;
  height: 89px;

  display: flex;

  align-items: center;
  justify-content: center;
`;

export const Container = styled.button`
  display: flex;
  justify-content: center;
  position: relative;

  color: #fff;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  width: 150px;
  height: 65px;

  font-size: 14px;
  font-style: normal;
  font-weight: normal;

  transition: all 0.2s;

  p.nomeDisc {
    line-height: 18px;
    font-size: 12px;

    max-width: 120px;
    align-self: center;
    text-align: center;
  }

  p.idDisc {
    opacity: 0;
    position: absolute;
    top: 2px;
    left: 4px;
  }

  p.cargaHoraria {
    opacity: 0;
    position: absolute;
    bottom: 2px;
    right: 4px;
  }

  p.preReq {
    opacity: 0;
    position: absolute;
    top: 2px;
    right: 4px;
  }

  &:hover {
    transform: scale(1.2, 1.2);
    /* width: 160px;
    height: 75px; */

    span {
      opacity: 1;
    }

    h1.nomeDisc {
      font-weight: bold;
    }
  }
`;

export const Nome = styled.h1`
  line-height: 18px;
  font-size: 12px;
  max-width: 120px;
  align-self: center;
  text-align: center;
`;

export const CargaHoraria = styled.span`
  opacity: 0;
  position: absolute;
  bottom: 2px;
  right: 4px;
`;

export const IdDisciplina = styled.span`
  opacity: 0;
  position: absolute;
  top: 2px;
  left: 4px;
`;

export const PreReq = styled.span`
  opacity: 0;
  position: absolute;
  top: 2px;
  right: 4px;
`;
