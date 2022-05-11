import React, {useState} from "react";
import Grid from "../elements/Grid";
import Text from "../elements/Text";
import "./menu.css"

const Category = () => {

    
    return (
        <ul class="cd-accordion-menu animated">
          <label>All CATEGORIES</label>
        <li class="has-children">
          <input type="checkbox" name="group-1" id="group-1" />
          <label for="group-1">ACCESSORIES</label>
          <ul>
            <li class="has-children">
              <input type="checkbox" name="sub-group-1" id="sub-group-1"/>
              <label for="sub-group-1">Bracelet</label>
             
            </li>
            <li class="has-children">
              <input type="checkbox" name="sub-group-2" id="sub-group-2"/>
              <label for="sub-group-2">Ring</label>
              <ul>
                <li class="has-children">
                  <input type="checkbox" name="sub-group-level-3" id="sub-group-level-3"/>
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li class="has-children">
          <input type="checkbox" name="group-2" id="group-2"/>
          <label for="group-2">BAGS</label>
          <ul>
            <li><a href="#0">Backpacks</a></li>
            <li><a href="#0">Briefcases</a></li>
            <li><a href="#0">Duffle Bags</a></li>
            <li><a href="#0">Messenger Bags</a></li>
            <li><a href="#0">Pouches & Document Holders</a></li>
            <li><a href="#0">Tote Bags</a></li>
            <li><a href="#0">Travel Bags</a></li>
          </ul>
        </li>
        <li class="has-children">
          <input type="checkbox" name="group-3" id="group-3"/>
          <label for="group-3">CLOTHING</label>
          <ul>
            <li><a href="#0">Dresses</a></li>
            <li><a href="#0">Shirts</a></li>
          </ul>
        </li>
        <li class="has-children">
          <input type="checkbox" name="group-4" id="group-4" />
          <label for="group-4">SHOES</label>
          <ul>
            <li class="has-children">
              <input type="checkbox" name="sub-group-3" id="sub-group-3" />
              <label for="sub-group-3">Runnig Shoes</label>
            
            </li>
          
          </ul>
        </li>
      </ul>
    )
}
export default Category;