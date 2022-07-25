import BaseError from './BaseError'

class MissedTokenError extends BaseError {
  constructor() {
    super(
      401,
      'MissedTokenError',
      'Missed Token',
      'Put the token to have access to the data',
    )
  }
}

export default MissedTokenError