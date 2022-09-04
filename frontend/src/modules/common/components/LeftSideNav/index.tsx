import React from 'react';
import styles from './LeftSideNav.module.scss';
import Link from 'next/link';
import { useRouter } from 'next/router';
import isStringMatched from '../../../../helpers/utils/isStringMatched';
import { useAppDispatch } from '../../hooks';
import { actionLogoutBuyer } from '../../actions';
import { removeToken } from '../../../../libs/authClient';
import { removeUser } from '../../../../reducers/userReducer';

const LeftSideNav = () => {
    const router = useRouter();

    const dispatch = useAppDispatch();

    const handleLogoutUser = async () => {
        try {
            await actionLogoutBuyer();
            removeToken();
            dispatch(removeUser());
            window.location.replace(process.env.SIGNIN_URL as string);
        } catch (error) {}
    };
    return (
        <div
            className={`${styles.activitybar} bg-dh-gray-200 h-screen pt-5 sticky top-0 flex flex-col justify-between`}
        >
            <div>
                <Link href={`/`}>
                    <a>
                        <img
                            className="mx-auto mb-9"
                            src="/static/assets/icons/icon-192x192.png"
                            alt="home"
                            width="38px"
                            height="38px"
                        />
                    </a>
                </Link>
                <div className="flex flex-col items-center w-full gap-4">
                    <Link href={'/'}>
                        <a>
                            <img
                                className={router.pathname == '/' ? styles.active : `filter grayscale opacity-60`}
                                src="/static/assets/icons/home.svg"
                                alt="home"
                                width="30px"
                                height="30px"
                            />
                        </a>
                    </Link>
                    <Link href="/search">
                        <a>
                            <img
                                title="Search"
                                className={router.pathname == '/search' ? styles.active : `filter grayscale opacity-60`}
                                src="/static/assets/icons/search.svg"
                                alt="home"
                                width="30px"
                                height="30px"
                            />
                        </a>
                    </Link>

                    <Link href={'/agreements'}>
                        <a>
                            <div
                                title="Agreement"
                                className={
                                    isStringMatched(router.pathname, '/agreements')
                                        ? styles.active
                                        : `filter grayscale opacity-60`
                                }
                            >
                                <img
                                    className={`filter grayscale`}
                                    src="/static/assets/icons/agreement.svg"
                                    alt="home"
                                    width="30px"
                                    height="30px"
                                />
                            </div>
                        </a>
                    </Link>

                    <Link href={'/sample-requests'}>
                        <a>
                            <div
                                title="Sample Request"
                                className={
                                    isStringMatched(router.pathname, '/sample-requests')
                                        ? styles.active
                                        : `filter grayscale opacity-60`
                                }
                            >
                                <img
                                    className={`filter grayscale`}
                                    src="/static/assets/icons/sample-request.svg"
                                    alt="home"
                                    width="30px"
                                    height="30px"
                                />
                            </div>
                        </a>
                    </Link>

                    <Link href={'/quotations'}>
                        <a>
                            <div
                                title="Quotation"
                                className={
                                    isStringMatched(router.pathname, '/quotations') ? styles.active : `filter grayscale`
                                }
                            >
                                <img
                                    className="filter grayscale opacity-60"
                                    src="/static/assets/icons/quotation.svg"
                                    alt="home"
                                    width="30px"
                                    height="30px"
                                />
                            </div>
                        </a>
                    </Link>

                    <Link href={'/messages'}>
                        <a>
                            <div
                                title="Message"
                                className={
                                    isStringMatched(router.pathname, '/messages') ? styles.active : `filter grayscale`
                                }
                            >
                                <img
                                    className="filter grayscale opacity-60"
                                    src="/static/assets/icons/message.svg"
                                    alt="home"
                                    width="22px"
                                    height="18px"
                                />
                            </div>
                        </a>
                    </Link>

                    <Link href={'/my-history'}>
                        <a>
                            <div
                                title="My History"
                                className={
                                    isStringMatched(router.pathname, '/my-history')
                                        ? styles.active
                                        : `filter grayscale opacity-60`
                                }
                            >
                                <img
                                    className={`filter grayscale`}
                                    src="/static/assets/icons/history.svg"
                                    alt="home"
                                    width="30px"
                                    height="30px"
                                />
                            </div>
                        </a>
                    </Link>
                </div>
            </div>

            <div className="flex flex-col items-center mb-7 gap-6 ">
                <img src="/static/assets/icons/help.png" alt="home" width="20px" height="20px" />
                <Link href="/profile/edit">
                    <a>
                        <img src="/static/assets/icons/settings.png" alt="home" width="20px" height="20px" />
                    </a>
                </Link>
                <img
                    onClick={handleLogoutUser}
                    src="/static/assets/icons/logout.png"
                    alt="home"
                    width="20px"
                    height="20px"
                />
            </div>
        </div>
    );
};

export default LeftSideNav;