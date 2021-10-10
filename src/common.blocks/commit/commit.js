import React from 'react';
import { formatDistance, subDays, format } from 'date-fns';
import ru from 'date-fns/locale/ru';
import './commit.scss';

const Commit = props => {
    const { commit } = props;
    const statusMap = {
      'done': '/img/icon-done.svg',
      'fail': '/img/icon-fail.svg',
      'pending': '/img/icon-pending.svg'
    };
    const imgStatus = (statusMap[commit.status]) ? statusMap[commit.status] : null;

    const getTimeDistance = timestamp =>
        formatDistance(subDays(new Date(timestamp), 3), new Date(), { addSuffix: true, locale: ru });

    const getFormattedDate = timestamp =>
        format(new Date(timestamp), 'dd MMM, HH:mm', { locale: ru });

    return (
        <li className="commits__item commit">
            <div className="commit__body">
                <div className="commit__row commit__row_first commit__row_left commit__row_message">
                    <div className="commit__status">
                        <img className={"commit__coloricon"} src={imgStatus} alt={"status icon"} />
                        <span className={`commit__hash commit__hash_${commit.status}`}>{commit.number}</span>
                    </div>
                    <span className="commit__message">{commit.message}</span>
                </div>
                <div className="commit__row commit__row_left commit__row_branch">
                    <div className="commit__branch text">
                        <img className={"commit-icon commit__branch-icon"} src={"/img/icon-commit.svg"} alt={"commit icon"}/>
                        <span className="commit__branch-name">{commit.branch}</span>
                    </div>
                    <span className="commit__commit text text_secondary">{commit.commit}</span>
                    <div className="commit__author commit__author-icon">
                        <img className={"commit-icon commit__user-icon"} src={"/img/icon-user.svg"} alt={"user icon"} />
                        <span className="commit__author-name text">{commit.author}</span>
                    </div>
                </div>
            </div>

            <div className="commit__datetime">
                <div className="commit__row commit__row_first">
                    <img className={"commit-icon commit__calendar-icon"} src={"/img/icon-calendar.svg"} alt={"calendar icon"} />
                    <span className="commit__date text text_secondary">{getFormattedDate(commit.date)}</span>
                </div>

                <div className="commit__row commit__row_timestamp">
                    <img className={"commit-icon commit__stopwatch-icon"} src={"/img/icon-stopwatch.svg"} alt={"stopwatch icon"} />
                    <span className="commit__timestamp text text_secondary">{getTimeDistance(commit.date)}</span>
                </div>
            </div>
        </li>
    );
}

export default Commit;