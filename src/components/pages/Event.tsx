import React, { FC, useEffect } from 'react';
import { Redirect } from 'react-router';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { RootState } from 'stores';
import { fetchEvent } from 'stores/event';
import { STATUS } from 'apis/connpassAPI';
import DefaultTemplate from 'components/templates/Default';
import EventDetailHeader from 'components/organisms/EventDetailHeader';
import EventDetailLink from 'components/organisms/EventDetailLink';
import EventDetailContent from 'components/organisms/EventDetailContent';
import EventDetailMap from 'components/organisms/EventDetailMap';
import RelatedEvents from 'components/organisms/RelatedEvents';
import styles from 'styles/components/pages/Event.module.scss';
import exclamation from 'images/commons/icon-exclamation.svg';

const Event: FC = () => {
  const { data: event, hasEvent, status } = useSelector(
    (state: RootState) => state.event
  );
  const { eventId } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchEvent(Number(eventId)));
  }, [eventId, dispatch]);

  if (!hasEvent) {
    return <Redirect to="/" />;
  }

  return (
    <DefaultTemplate>
      <div className={styles.container}>
        {status !== STATUS.ERROR ? (
          <main className={styles.main}>
            {event && (
              <>
                <div className={styles.header}>
                  <EventDetailHeader event={event} />
                </div>
                {event.event_url && (
                  <div className={styles.link}>
                    <EventDetailLink event={event} />
                  </div>
                )}
                {event.description && (
                  <div className={styles.content}>
                    <EventDetailContent event={event} />
                  </div>
                )}
                {event.lat && event.lon && (
                  <div className={styles.map}>
                    <EventDetailMap event={event} />
                  </div>
                )}
                {event.event_url && (
                  <div className={styles.link}>
                    <EventDetailLink event={event} />
                  </div>
                )}
              </>
            )}
          </main>
        ) : (
          <main className={`${styles.main} ${styles.error}`}>
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
          </main>
        )}
        <aside className={styles.sidebar}>
          <RelatedEvents />
        </aside>
      </div>
    </DefaultTemplate>
  );
};

export default Event;
