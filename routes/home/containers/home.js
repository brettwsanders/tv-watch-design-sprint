import { connect } from 'react-redux';
import { Home } from '../components/home';

const mapStateToProps = (state) => {
  return {
    queue: state.queue
  };
};

const mapDispatchToProps = (dispatch) => {
  // dispatch(fetchRatesIfNeeded(['GBP', 'USD', 'EUR']));

  return {
    // onIncrementCounter: () => { dispatch(increment()) },
    // onDecrementCounter: () => { dispatch(decrement()) },
    // onChangeConverterAmount: (amount) => { dispatch(setAmount(amount)) },
    // onChangeConverterCurrency: (currency) => { dispatch(setCurrency(currency)) }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
