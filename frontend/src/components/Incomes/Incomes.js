import React from 'react'
import { styled } from 'styled-components'
import { InnerLayout } from '../../style/Layouts';
import { useGlobalContext } from '../../context/globalContext';
import Form from '../Form/Form';

function Incomes() {
  const {addIncome} = useGlobalContext()
  return (
    <IncomesStyled>
      <InnerLayout>
        <h1>Incomes</h1>
        <div className='income-content'>
          <div className='form-container'>
            <Form />
          </div>
          <div className='incomes'>

          </div>
        </div>
      </InnerLayout>
    </IncomesStyled>
  )
}

const IncomesStyled = styled.div`

`;

export default Incomes