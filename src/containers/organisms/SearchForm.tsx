import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import SearchForm from 'components/organisms/SearchForm';
import { setPrefecture } from 'actions/condition';
import { ConditionState } from 'reducers/condition';

interface StateProps {
  prefecture: string;
}

interface DispatchProps {
  setPrefecture: (prefecture: string) => void;
}

const mapStateToProps = (state: ConditionState): StateProps => ({
  prefecture: state.prefecture,
});

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps =>
  bindActionCreators({ setPrefecture }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(SearchForm);
