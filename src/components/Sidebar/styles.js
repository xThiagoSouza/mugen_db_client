/* import styled, { css } from "styled-components";

export const Side = styled.div`
  width: 20%;
  border-right: 3px solid #000;
  background: #ccc9a1;

  position: relative;

  h2 {
    width: 100%;
    height: 35px;
    background: #734;
    color: #fff;
    padding: 2px 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 20px;

    svg:hover {
      cursor: pointer;
    }
  }

  .menu-hambuger {
    display: none;
  }

  @media only screen and (max-width: 949px) {
    h2 {
      font-size: 16px;
    }

    svg {
      width: 16px;
    }
  }

  @media only screen and (max-width: 749px) {
    & {
      width: 100%;
      border-radius: 0;
    }

    .menu-hambuger {
      display: block;
      height: 30px;
    }

    .menuImg {
      margin-left: 5px;
      border: none;
      background: none;
    }

    .menuImg:hover {
      cursor: pointer;
    }

    h2 {
      display: none;
    }
  }
`;

export const Navbar = styled.ul`
  display: flex;
  flex-direction: column;
  flex: 1;
  color: #000;

  li {
    padding: 2px 5px 2px;
    transition: ease-in-out 100ms;
    display: flex;
    flex-direction: column;

    border: 1px solid #424024;

    &:last-child {
      border-bottom: 2px solid #424024;
    }

    &:hover {
      background: #424024;
      color: #fff;

      ul {
        display: block;
      }
    }
  }

  @media only screen and (max-width: 749px) {
    & {
      width: 150px;
      position: absolute;
      left: ${(props) => (props.showMenu ? "0px" : "-1000px")};
      transition: ease-in-out 300ms;

      li {
        position: relative;
        transition: ease-in-out 200ms;

        ul {
          position: absolute;
          top: 0;
          left: 130px;
          z-index: 5;

          li {
            background-color: #424024;
            color: #fff;
            margin: 1px 5px;
          }
        }
      }
    }

    li {
      background: rgba(204, 201, 161, 0.9);
    }
  }
`;

export const SubNavbar = styled(Navbar)`
  margin: 0 5px 0 15px;
  display: none;

  li {
    border: none;
    border-radius: 3px;
    margin: 2px 0;

    background: #f5e9e2;

    &:hover {
      background: #d4bfb3;
      color: #000;
    }
  }
`;

export const Input = styled.input`
  width: 250px;
  padding: 4px 10px;
  font-size: 14px;
  display: block;
  border: none;
  border-radius: 5px;
  transition: ease-in-out 0.5s;
  position: absolute;
  left: 105%;

  &:focus {
    box-shadow: 0 0 10px #fff;
  }

  ${(props) =>
    props.showSearchChar
      ? css`
          top: 5px;
        `
      : css`
          top: -100px;
        `}

  @media only screen and (max-width: 749px) {
    top: 3px;
    left: 5%;
    padding: 3px 10px;
  }
`;
 */

import styled, { css } from 'styled-components';

export const Side = styled.div`
	width: 20%;
	border-right: 3px solid #000;
	background: var(--color-menu);

	position: relative;

	h2 {
		width: 100%;
		height: 35px;
		background: var(--color-title);
		color: var(--color-text-title);
		padding: 2px 10px;
		display: flex;
		align-items: center;
		justify-content: space-between;
		font-size: 20px;

		svg:hover {
			cursor: pointer;
		}
	}

	.menu-hambuger {
		display: none;
	}

	@media only screen and (max-width: 949px) {
		h2 {
			font-size: 16px;
		}

		svg {
			width: 16px;
		}
	}

	@media only screen and (max-width: 749px) {
		& {
			width: 100%;
			border-radius: 0;
		}

		.menu-hambuger {
			display: block;
			height: 30px;
		}

		.menuImg {
			margin-left: 5px;
			border: none;
			background: none;
		}

		.menuImg:hover {
			cursor: pointer;
		}

		h2 {
			display: none;
		}
	}
`;

export const Navbar = styled.ul`
	display: flex;
	flex-direction: column;
	flex: 1;
	color: #000;

	li {
		padding: 2px 5px 2px;
		transition: ease-in-out 100ms;
		display: flex;
		flex-direction: column;

		border-bottom: 2px solid var(--color-menu-secondary);

		&:hover {
			background: var(--color-menu-secondary);
			color: var(--color-text-title);
		}
	}

	@media only screen and (max-width: 749px) {
		& {
			width: 150px;
			position: absolute;
			left: ${(props) => (props.showMenu ? '0px' : '-1000px')};
			transition: ease-in-out 300ms;

			li {
				position: relative;
				transition: ease-in-out 200ms;

				ul {
					position: absolute;
					top: 0;
					left: 130px;
					z-index: 5;

					li {
						background-color: var(--color-menu-secondary);
						color: var(--color-text-title);
						margin: 1px 5px;
					}
				}
			}
		}

		li {
			opacity: 0.9;
		}
	}
`;

export const SubNavbar = styled(Navbar)`
	margin: 0 5px 0 15px;

	display: ${(props) => (props.showChars === 'true' ? 'block' : 'none')};

	li {
		border: none;
		border-radius: 3px;
		margin: 2px 0;

		background: var(--color-secondary);

		&:hover {
			background: var(--color-secondary);
			opacity: 0.9;
			color: #000;
		}
	}
`;

export const Input = styled.input`
	width: 250px;
	padding: 4px 10px;
	font-size: 14px;
	display: block;
	border: none;
	border-radius: 5px;
	transition: ease-in-out 0.5s;
	position: absolute;
	left: 105%;

	&:focus {
		box-shadow: 0 0 10px #fff;
	}

	${(props) =>
		props.showSearchChar
			? css`
					top: 5px;
			  `
			: css`
					top: -100px;
			  `}

	@media only screen and (max-width: 749px) {
		top: 3px;
		left: 5%;
		padding: 3px 10px;
	}
`;
