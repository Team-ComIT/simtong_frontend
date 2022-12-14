import React, { SetStateAction, Dispatch } from 'react';

interface MealArrowType {
    direction: 'right' | 'left';
    datePlusNumber: number;
    setDatePlusNumber: Dispatch<SetStateAction<number>>;
}

const MealArrow = (props: MealArrowType) => {
    const { direction, datePlusNumber, setDatePlusNumber } = props;

    const changeDatePlusNumber = () => {
        if (direction == 'right') setDatePlusNumber(datePlusNumber + 1);
        else setDatePlusNumber(datePlusNumber - 1);
    };

    return (
        <div onClick={changeDatePlusNumber} style={{ cursor: 'pointer' }}>
            <svg
                width="12"
                height="18"
                viewBox="0 0 12 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                {direction == 'right' ? (
                    <path
                        d="M0 15.885L7.417 9L0 2.115L2.2834 0L12 9L2.2834 18L0 15.885Z"
                        fill="#242424"
                    />
                ) : (
                    <path
                        d="M12 15.885L4.583 9L12 2.115L9.7166 0L4.97445e-07 9L9.7166 18L12 15.885Z"
                        fill="#242424"
                    />
                )}
            </svg>
        </div>
    );
};

export default MealArrow;
