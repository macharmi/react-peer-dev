import React, {Component} from 'react'
import { Nav, NavItem, NavLink } from 'reactstrap';


class Menu extends Component{
    render(){
        return(
            <div>
                <Nav>
                    <NavItem>
                        <NavLink href='list'>Book list</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href='new'>New book</NavLink>
                    </NavItem>
                </Nav>
            </div>
        )
    }
}
export default Menu;