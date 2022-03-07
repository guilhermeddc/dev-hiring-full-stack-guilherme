import '@testing-library/jest-dom'

import * as React from 'react'
import {render, screen} from '@testing-library/react'
import { RegisterForm } from '../'

test('Deve mostrar o titulo no formulário de cadastro e edição', () => {
  const title = 'Formulário de cadastro e edição'
  render(<RegisterForm></RegisterForm>)
  expect(screen.queryByText(title)).toBeInTheDocument()
})
