import styled from 'styled-components';

import { theme } from '~/styles/theme';

export const Wrapper = styled.div`
  color: ${theme.primary.active};
  background: #fff;
  border-radius: 4px;
  border: 1px solid ${theme.primary.bg};
  padding: 20px;

  h3 + h3 {
    margin-top: 10px;
  }

  hr {
    margin: 12px 0;
  }
  overflow: scroll;
  overflow-x: hidden;
  height: 90vh;
`;

export const CloseButton = styled.button`
  cursor: pointer;
  position: absolute;
  display: block;
  padding: 2px 5px;
  line-height: 20px;
  right: 0px;
  top: 0px;
  font-size: 24px;
  border-radius: 18px;
  border: 1px solid ${theme.primary.active};
`;

export const MarkdownItem = styled.li`
  a {
    color: ${theme.primary.active};
  }
  font-size: 1.6rem;
`;

export const ModalStyle = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    padding: 16,
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    zIndex: 3,
    border: 'none',
    background: 'transparent',

    width: '80%',
    overflow: 'unset',
  },

  overlay: {
    backgroundColor: 'rgba(0, 0, 0, .7)',
    zIndex: 3,
  },
};

export const H1Markdown = styled.h1`
  font-size: 3.2rem;
  font-style: 600;
  padding-bottom: 20px;
`;

export const H3Markdown = styled.h3`
  font-size: 2.4rem;
  font-weight: 400;
`;

export const H1StyleEmoji = {
  style: {
    height: 40,
    margin: 0,
    fontSize: 'inherit',
    top: 0,
    position: 'relative',
    maring: 0,
    verticalAlign: 'unset',
  },
};

export const H3StyleEmoji = {
  style: {
    height: 26,
    margin: 0,
    fontSize: 'inherit',
    top: 3,
    position: 'relative',
    maring: 0,
    verticalAlign: 'unset',
    marginRight: 4,
  },
};

export const LinkList = styled.ul``;
