import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import { Condition } from 'utils/interfaces';
import SearchFormEventDate from 'components/molecules/SearchFormEventDate';
import {
  setEventDateBy,
  setEventDateYmYear,
  setEventDateYmMonth,
  setEventDateYmdYear,
  setEventDateYmdMonth,
  setEventDateYmdDay,
} from 'actions/condition';

interface ConditionProps {
  condition: Condition;
}

interface DispatchProps {
  setEventDateBy: (value: string) => void;
  setEventDateYmYear: (value: string) => void;
  setEventDateYmMonth: (value: string) => void;
  setEventDateYmdYear: (value: string) => void;
  setEventDateYmdMonth: (value: string) => void;
  setEventDateYmdDay: (value: string) => void;
}

const mapStateToProps = (state: ConditionProps): ConditionProps => ({
  condition: state.condition,
});

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps =>
  bindActionCreators(
    {
      setEventDateBy,
      setEventDateYmYear,
      setEventDateYmMonth,
      setEventDateYmdYear,
      setEventDateYmdMonth,
      setEventDateYmdDay,
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchFormEventDate);
