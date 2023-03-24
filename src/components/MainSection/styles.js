/* import styled from "styled-components";

export const Main = styled.div`
  width: 80%;
  background: #f5e9e2;

  div {
    min-height: 225px;
  }

  @media only screen and (max-width: 749px) {
    & {
      width: 99%;
      margin: 0 auto;
    }
  }
`;

export const Infos = styled.div`
  display: grid;
  grid-template-columns: 200px 1fr;
  padding: 25px 50px;

  img {
    width: 200px;
    height: 250px;
    border-radius: 10px 0px 0px 10px;
    background: #424024;

    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const InfosBio = styled.div`
  background: #424024;
  color: #fff;
  flex: 1;
  padding: 0 10px;
  border-radius: 0px 5px 5px 0px;
  padding: 10px 15px;
  line-height: 1.5em;
  font-size: 20px;
`;

export const Moves = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  img {
    padding: 5px;
    border-radius: 10px;

    display: flex;
    justify-content: center;
    align-items: center;

    min-width: 60%;
    max-width: 80%;

    height: auto;
    margin: 15px auto;
  }

  @media only screen and (max-width: 749px) {
    min-height: 250px;
  }
`;
 */
import styled from 'styled-components';

export const Main = styled.div`
	width: 80%;
	background: var(--color-secondary);

	div {
		min-height: 225px;
	}

	@media only screen and (max-width: 749px) {
		& {
			width: 99%;
			margin: 0 auto;
		}
	}
`;

export const Infos = styled.div`
	display: grid;
	grid-template-columns: 200px 1fr;
	padding: 25px 50px;

	img {
		width: 200px;
		height: 250px;
		border-radius: 10px 0px 0px 10px;
		background: var(--color-primary);

		display: flex;
		justify-content: center;
		align-items: center;
	}
`;

export const InfosBio = styled.div`
	background: var(--color-primary);
	color: var(--color-text-secondary);
	flex: 1;
	padding: 0 10px;
	border-radius: 0px 5px 5px 0px;
	padding: 10px 15px;
	line-height: 1.5em;
	font-size: 20px;
`;

export const Moves = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	align-items: center;

	img {
		padding: 5px;
		border-radius: 10px;

		display: flex;
		justify-content: center;
		align-items: center;

		/* min-width: 600px;
    max-width: 600px;
    min-height: auto;
    max-height: auto; */
		min-width: 60%;
		max-width: 80%;

		height: auto;
		margin: 15px auto;
	}

	@media only screen and (max-width: 749px) {
		min-height: 250px;
	}
`;
