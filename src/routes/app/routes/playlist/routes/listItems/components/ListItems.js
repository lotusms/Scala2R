import React from 'react';

import {LabelCheckbox} from 'material-ui/Checkbox';

state = {
    checkedA: true
};

const CheckboxExampleSimple = () => (
    <div className="row">
        <div className="col-lg-6">
            <LabelCheckbox
                checked={this.state.checkedA}
                onChange={(event, checked) => this.setState({ checkedA: checked })}
                label="Simple"
                value="checkedA"/>
        </div>
    </div>
);

const CheckboxSection = () => (
    <article className="article">
        <h2 className="article-title">Material Checkbox</h2>

        <section className="box box-default">
            <div className="box-body padding-xl">
                <div className="col-xl-10">

                    <CheckboxExampleSimple/>

                </div>
            </div>
        </section>
    </article>
);

module.exports = CheckboxSection;
