import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import { Condition } from 'utils/interfaces';
import SearchForm from 'components/organisms/SearchForm';
import {
  setPrefecture,
  setOrderBy,
  setLanguages,
  setFrameworks,
  setKeywords,
} from 'actions/condition';

interface ConditionProps {
  condition: Condition;
}

interface DispatchProps {
  setPrefecture: (value: string) => void;
  setOrderBy: (value: string) => void;
  setLanguages: (value: string) => void;
  setFrameworks: (value: string) => void;
  setKeywords: (value: string) => void;
}

const mapStateToProps = (state: ConditionProps): ConditionProps => ({
  condition: state.condition,
});

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps =>
  bindActionCreators(
    { setPrefecture, setOrderBy, setLanguages, setFrameworks, setKeywords },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(SearchForm);
