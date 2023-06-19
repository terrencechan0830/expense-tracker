import React from 'react'
import { styled } from 'styled-components'
import { InnerLayout } from '../../style/Layouts';
import { useGlobalContext } from '../context/globalContext';

function Incomes() {
  const {addIncome} = useGlobalContext()
  return (
    <IncomesStyled>
      <InnerLayout>
        <h1>Incomes</h1>
        <div className='income-content'>
          <div className='form-container'>

          </div>
          <div className='incomes'>

          </div>
        </div>
      </InnerLayout>
    </IncomesStyled>
  )
}

const IncomesStyled = styled.div`
  .income-content{

  }
  .form-container{

  }
`;

export default Incomes