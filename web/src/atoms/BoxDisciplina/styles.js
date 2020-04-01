import styled from 'styled-components';

export const Wrapper = styled.li`
  width: 174px;
  height: 89px;
  display: flex;

  align-items: center;
  justify-content: center;

  @media (max-width: 400px) {
    width: calc(100% - 64px);
  }
`;

export const Container = styled.button`
  display: flex;
  margin: 0;
  justify-content: center;
  position: relative;

  color: #fff;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  width: 160px;
  height: 75px;
  font-style: normal;
  font-weight: normal;

  transition: all 0.2s;

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

  @media (max-width: 400px) {
    width: calc(100% - 24px);
    margin: auto;
  }
`;

export const Nome = styled.h1`
  line-height: 1.8rem;
  font-size: 1.4rem;
  max-width: 120px;
  align-self: center;
  text-align: center;
`;

export const CargaHoraria = styled.span`
  font-size: 1.2rem;
  opacity: 0;
  position: absolute;
  bottom: 2px;
  right: 4px;
`;

export const IdDisciplina = styled.span`
  font-size: 1.2rem;
  opacity: 0;
  position: absolute;
  top: 2px;
  left: 4px;
`;

export const PreReq = styled.span`
  font-size: 1.2rem;
  opacity: 0;
  position: absolute;
  top: 2px;
  right: 4px;
`;
