import React, { FC, useEffect } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { RootState } from 'stores';
import { fetchEvents } from 'stores/events';
import { Event, STATUS } from 'apis/connpassAPI';
import { formatDate } from 'app/date';
import styles from 'styles/components/organisms/RelatedEvents.module.scss';
import calendar from 'images/commons/icon-calendar.svg';
import exclamation from 'images/commons/icon-exclamation.svg';

const RelatedEvents: FC = () => {
  const { events, results_available: resultsAvailable } = useSelector(
    (state: RootState) => state.events.data
  );
  const { status } = useSelector((state: RootState) => state.events);
  const { search } = useLocation();
  const { eventId } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    const params = new URLSearchParams(search);
    const seriesId = params.get('series_id');
    if (seriesId) {
      dispatch(fetchEvents(6, 1, search));
    }
  }, [search, dispatch]);

  const relatedEvent = (event: Event) => (
    <Link
      to={`/event/${event.event_id}${
        event.series && event.series.id ? `?series_id=${event.series.id}` : ''
      }`}
      key={event.event_id}
      className={styles.post}
    >
      {event.title && <h4 className={styles.title}>{event.title}</h4>}
      <div className={styles.foot}>
        {event.started_at && (
          <time
            className={styles.date}
            style={{ backgroundImage: `url(${calendar})` }}
          >
            {formatDate(event.started_at)}
          </time>
        )}
      </div>
    </Link>
  );

  return (
    <div className={styles.container}>
      <h3 className={styles.heading}>関連イベント</h3>
      <div className={styles.content}>
        {status !== STATUS.ERROR ? (
          resultsAvailable > 1 ? (
            events.map((event) => {
              if (event.event_id === Number(eventId)) return false;
              return relatedEvent(event);
            })
          ) : (
            <div className={styles.post}>
              <h4 className={styles.title}>関連するイベントはありません</h4>
            </div>
          )
        ) : (
          <div className={styles.post}>
            <h4 className={`${styles.title} ${styles.error}`}>
              <img src={exclamation} alt="" />
              <span>通信エラーが発生しました</span>
            </h4>
          </div>
        )}
      </div>
    </div>
  );
};

export default RelatedEvents;
