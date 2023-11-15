import styled from '@emotion/styled';

export const ButtonList = styled.div`
  display: flex;
  column-gap: 10px;
  margin-bottom: 30px;
`;

export const Button = styled.button`
  font-size: 1em;
  font-weight: 700;
  text-transform: capitalize;

  background-color: #ffffff;
  padding: 10px 0;
  width: 80px;
  border: 3px solid
    ${props => {
      if (props.option === 'good') {
        return 'green';
      } else if (props.option === 'neutral') {
        return 'orange';
      } else {
        return 'red';
      }
    }};
  border-radius: 5px;
  cursor: pointer;
  transition: transform 250ms cubic-bezier(0.165, 0.84, 0.44, 1);

  &:hover {
    transform: scale(1.05);
  }
`;