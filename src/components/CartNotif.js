
import { TiShoppingCart } from "react-icons/ti";
import React from 'react';
import Badge from '@material-ui/core/Badge';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import { Link } from "react-router-dom";

const StyledBadge = withStyles((theme) => ({
  badge: {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}))(Badge);

const CartNotif = ({id, qty}) => {
  return (
    <div>
      <Link to={`/cart/${id}`}>
        <IconButton aria-label="cart" >
            <StyledBadge badgeContent={qty} color="secondary">
              <TiShoppingCart />
            </StyledBadge>
        </IconButton>
      </Link>
    </div>
  )
}

export default CartNotif