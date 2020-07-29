import React, { FC, useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Element as ScrollElement } from 'react-scroll';

import { RootState } from 'stores';
import { fetchEvents } from 'stores/events';
import DefaultTemplate from 'components/templates/Default';
import SearchFormContainer from 'components/organisms/SearchFormContainer';
import CurrentSearchCondition from 'components/organisms/CurrentSearchCondition';
import EventListCard from 'components/molecules/EventListCard';
import EventListPager from 'components/molecules/EventListPager';
import styles from 'styles/components/pages/Home.module.scss';
import exclamation from 'images/commons/icon-exclamation.svg';
import sad from 'images/commons/icon-sad.svg';
import { STATUS } from 'apis/connpassAPI';
import { scrollToTopOfPage } from 'app/scroller';

const Home: FC = () => {
  const { events, results_available: resultsAvailable } = useSelector(
    (state: RootState) => state.events.data
  );
  const { status } = useSelector((state: RootState) => state.events);
  const { search } = useLocation();
  const { paged } = useParams();
  const perPage = 20;
  const currentPage = Number(paged) || 1;
  const totalPage = Math.ceil(resultsAvailable / perPage);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchEvents(perPage, currentPage, search));
  }, [perPage, currentPage, search, dispatch]);

  return (
    <DefaultTemplate>
      <div className={styles.search}>
        <SearchFormContainer />
      </div>
      <main className={styles.main}>
        <aside className={styles.sidebar}>
          <CurrentSearchCondition />
        </aside>
        <article className={styles.articles}>
          {status !== STATUS.ERROR &&
            (resultsAvailable > 0 ? (
              <ScrollElement name="TopOfCardList">
                <div className={styles.articles_heading}>
                  <h2 className={styles.articles_heading_title}>
                    {resultsAvailable.toLocaleString()}件がヒットしました
                  </h2>
                  <div className={styles.articles_heading_page}>
                    {currentPage} / {totalPage} ページ
                  </div>
                </div>
                {events.map((event) => (
                  <div key={event.event_id} className={styles.articles_card}>
                    <EventListCard event={event} />
                  </div>
                ))}
                <div className={styles.articles_pagination}>
                  <EventListPager current={currentPage} total={totalPage} />
                </div>
              </ScrollElement>
            ) : (
              <div className={styles.no_events}>
                <h2 className={styles.no_events_title}>
                  <img src={sad} alt="" />
                  <span>イベントが見つかりません</span>
                </h2>
                <p className={styles.no_events_text}>
                  条件に合致するイベントが見つかりません。
                  <br />
                  条件を変更して再度検索してください。
                </p>
                <button
                  onClick={scrollToTopOfPage}
                  className={styles.no_events_button}
                  type="button"
                >
                  条件を変更する
                </button>
              </div>
            ))}
          {status === STATUS.ERROR && (
            <div className={styles.error}>
              <h2 className={styles.error_title}>
                <img src={exclamation} alt="" />
                <span>通信エラー</span>
              </h2>
              <p className={styles.error_text}>
                申し訳ございません、通信時に何らかのエラーが発生しました。
                <br />
                再度操作を実行するか、それでも改善されない場合は
                <br />
                時間をあけて再度お試しください。
              </p>
            </div>
          )}
        </article>
      </main>
    </DefaultTemplate>
  );
};

export default Home;
