import BaseError from './BaseError'

class InvalidTokenError extends BaseError {
  constructor() {
    super(
      401,
      'InvalidTokenError',
      'Invalid Token',
      'The token presented is not valid',
    )
  }
}

export default InvalidTokenError