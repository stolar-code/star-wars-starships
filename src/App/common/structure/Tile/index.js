import {
  AddCartButton,
  Name,
  Cost,
  ManufacturersList,
  StyledTile,
  Count,
  CountButton,
  CountButtons,
  Wrapper,
  Information,
} from './styled';

const Tile = () => {
  const onFormSubmit = event => {
    event.preventDefault();
  };

  return (
    <StyledTile>
      <div>
        <Name>Millennium Falcon</Name>
        <Information>Manufacturers</Information>
        <ManufacturersList>
          <li>Imperial Department of Military</li>
        </ManufacturersList>
      </div>
      <div>
        <Wrapper>
          <Information>Cost</Information>
          <Cost>100.000.000.000</Cost>
        </Wrapper>
        <form onSubmit={onFormSubmit}>
          <CountButtons>
            <CountButton title='Decrease' disabled>
              -
            </CountButton>
            <Count type='number' min='1' placeholder='Quantity' />
            <CountButton title='Increase'>+</CountButton>
          </CountButtons>
          <AddCartButton title='Add to shopping cart'>Add to cart</AddCartButton>
        </form>
      </div>
    </StyledTile>
  );
};

export default Tile;