import './search-box.styles.css';
import React from 'react';

const SearchBox = ({className, placeholder, onChangeHandler}) => {
    return (
        <div>
            <input 
                className={`search-box ${className}`}
                type='search'   
                placeholder={placeholder}
                onChange={onChangeHandler}
            />
        </div>
    );
};


// class SearchBox extends Component {
//     render() {
//         return (
//             <div>
//                 <input 
//                     className={`search-box ${this.props.className}`}
//                     type='search'   
//                     placeholder={this.props.placeholder}
//                     onChange={this.props.onChangeHandler}
//                 />
//             </div>
//         );
//     }
// }

export default SearchBox;