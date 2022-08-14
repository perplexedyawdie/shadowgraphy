/**
 * OriginalAuthor: https://github.com/chimeralevia/react-curtain-reveal-box
 */
import React from 'react'
import { useState } from 'react';
import classNames from 'classnames';
import './Curtain.css';
import { useMount } from 'react-use';

function CurtainRevealBox({ children }: { children: React.ReactNode }) {
    const [revealed, setRevealed] = useState(false);
    const [forbiddenReveal, setForbiddenReveal] = useState(false);
    const curtain = classNames('curtain', {
        'forbidden': forbiddenReveal,
    });
    const curtain_wrapper = classNames('curtain_wrapper');
    const curtain_panel = classNames('curtain_panel');
    const curtain_panel_left = classNames('curtain_panel_left', {
        'reveal_left': revealed
    });
    const curtain_panel_right = classNames('curtain_panel_right', {
        'reveal_right': revealed
    });
    const curtain_content = classNames('curtain_content');
    const curtain_trigger_box = classNames('curtain_trigger_box', {
        'hide': revealed
    });

    const canReveal = () => {
        // if (revealCheck) {
        //     return revealCheck();
        // }

        return true;
    }

    const reveal = () => {
        if (canReveal()) {
            setRevealed(true);
            setForbiddenReveal(false);
            // if (onReveal) {
            //     onReveal();
            // }
        } else {
            setForbiddenReveal(true);
        }
    }

    const hide = () => {
        setRevealed(false);
        // if (onHide) {
        //     onHide();
        // }
    }

    // const onClick = () => {
    //     if (revealed) {
    //         hide();
    //     } else {
    //         reveal();
    //     }
    // }
    useMount(() => {
        setTimeout(() => {
            reveal()
        }, 1000);
    })

    // useEffect(() => {
    //     setRevealed(isRevealed)
    // }, [isRevealed])

    return (
        <div className={`${curtain}`}>
            <div className={`${curtain_wrapper}`}>
                {/* <button className={`${curtain_trigger_box}`} onClick={onClick}></button> */}
                <div className={`${curtain_panel} ${curtain_panel_left}`}></div>
                <div className={curtain_content}>
                    {children}
                </div>
                <div className={`${curtain_panel} ${curtain_panel_right}`}></div>
            </div>
        </div>
    );
}

export default CurtainRevealBox;
