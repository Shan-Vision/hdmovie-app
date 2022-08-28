import styled from 'styled-components';

export const GenresList = styled.ul`
  max-width: 1200px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 8px;
  margin: 0 auto 40px;
`;

export const GenresItem = styled.button`
  padding: 3px 10px;
  font-size: 16px;
  border-radius: 4px;
  cursor: pointer;
  color: white;
  border: none;
  background: ${({ active }) =>
    active
      ? `linear-gradient(
      45deg,
      rgb(239, 7, 129) 0%,
      rgb(239, 7, 129) 6%,
      rgb(208, 10, 112) 6%,
      rgb(208, 10, 112) 25%,
      rgb(177, 13, 96) 25%,
      rgb(177, 13, 96) 40%,
      rgb(147, 16, 79) 40%,
      rgb(147, 16, 79) 45%,
      rgb(116, 19, 62) 45%,
      rgb(116, 19, 62) 53%,
      rgb(85, 22, 46) 53%,
      rgb(85, 22, 46) 66%,
      rgb(54, 25, 29) 66%,
      rgb(54, 25, 29) 100%
    )`
      : ` linear-gradient(
      45deg,
      rgba(8, 211, 172, 0.45) 0%,
      rgba(8, 211, 172, 0.45) 12.5%,
      rgba(62, 29, 50, 0.45) 12.5%,
      rgba(62, 29, 50, 0.45) 25%,
      rgba(54, 55, 67, 0.45) 25%,
      rgba(54, 55, 67, 0.45) 37.5%,
      rgba(47, 81, 85, 0.45) 37.5%,
      rgba(47, 81, 85, 0.45) 50%,
      rgba(23, 159, 137, 0.45) 50%,
      rgba(23, 159, 137, 0.45) 62.5%,
      rgba(16, 185, 155, 0.45) 62.5%,
      rgba(16, 185, 155, 0.45) 75%,
      rgba(31, 133, 120, 0.45) 75%,
      rgba(31, 133, 120, 0.45) 87.5%,
      rgba(39, 107, 102, 0.45) 87.5%,
      rgba(39, 107, 102, 0.45) 100%
    ),
    linear-gradient(135deg, rgb(87, 116, 221), rgb(35, 4, 229))`};

  :hover,
  :focus-visible {
    background: linear-gradient(
      45deg,
      rgb(239, 7, 129) 0%,
      rgb(239, 7, 129) 6%,
      rgb(208, 10, 112) 6%,
      rgb(208, 10, 112) 25%,
      rgb(177, 13, 96) 25%,
      rgb(177, 13, 96) 40%,
      rgb(147, 16, 79) 40%,
      rgb(147, 16, 79) 45%,
      rgb(116, 19, 62) 45%,
      rgb(116, 19, 62) 53%,
      rgb(85, 22, 46) 53%,
      rgb(85, 22, 46) 66%,
      rgb(54, 25, 29) 66%,
      rgb(54, 25, 29) 100%
    );
  }
`;
