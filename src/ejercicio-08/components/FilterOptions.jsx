import React from 'react';
import FilterContainer from './FilterContainer';


const FilterOptions = () => {
    return (
        <div className='filters' style={{display: 'grid', gridTemplateColumns: 'repeat(3, auto)', width: '400px'}}>
            <FilterContainer filter ='SHOW_ALL'>
                <span 
                    style={{
                        fontSize: '1rem', 
                        paddingTop: 0,
                        paddingRight: '0.7rem',
                        paddingBottom: 0,
                        paddingLeft: '0.7rem',
                    }}>
                    ALL
                </span>
            </FilterContainer>
            <FilterContainer filter='SHOW_ACTIVE'>
            <span 
                    style={{
                        fontSize: '1rem', 
                        paddingTop: 0,
                        paddingRight: '0.7rem',
                        paddingBottom: 0,
                        paddingLeft: '0.7rem'
                    }}>
                    ACTIVE
                </span>
            </FilterContainer>
            <FilterContainer filter='SHOW_COMPLETED'>
            <span 
                    style={{
                        fontSize: '1rem', 
                        paddingTop: 0,
                        paddingRight: '0.7rem',
                        paddingBottom: 0,
                        paddingLeft: '0.7rem'
                    }}>
                    COMPLETED
                </span>
            </FilterContainer>
        </div>
    );
}

export default FilterOptions;
