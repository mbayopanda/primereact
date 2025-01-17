import { DocComponent } from '../../components/doc/common/doccomponent';
import { AccessibilityDoc } from '../../components/doc/speeddial/accessibilitydoc';
import { CircleDoc } from '../../components/doc/speeddial/circledoc';
import { CustomDoc } from '../../components/doc/speeddial/customdoc';
import { ImportDoc } from '../../components/doc/speeddial/importdoc';
import { LinearDoc } from '../../components/doc/speeddial/lineardoc';
import { MaskDoc } from '../../components/doc/speeddial/maskdoc';
import { QuarterCircleDoc } from '../../components/doc/speeddial/quartercircledoc';
import { SemiCircleDoc } from '../../components/doc/speeddial/semicircledoc';
import { StyleDoc } from '../../components/doc/speeddial/styledoc';
import { TooltipDoc } from '../../components/doc/speeddial/tooltipdoc';

const SpeedDialDemo = () => {
    const docs = [
        {
            id: 'import',
            label: 'Import',
            component: ImportDoc
        },
        {
            id: 'linear',
            label: 'Linear',
            component: LinearDoc
        },
        {
            id: 'circle',
            label: 'Circle',
            component: CircleDoc
        },
        {
            id: 'semicircle',
            label: 'Semi Circle',
            component: SemiCircleDoc
        },
        {
            id: 'quartercircle',
            label: 'Quarter Circle',
            component: QuarterCircleDoc
        },
        {
            id: 'tooltip',
            label: 'Tooltip',
            component: TooltipDoc
        },
        {
            id: 'mask',
            label: 'Mask',
            component: MaskDoc
        },
        {
            id: 'custom',
            label: 'Custom',
            component: CustomDoc
        },
        {
            id: 'style',
            label: 'Style',
            component: StyleDoc
        },
        {
            id: 'accessibility',
            label: 'Accessibility',
            component: AccessibilityDoc
        }
    ];

    return <DocComponent title="React Speed Dial Component" header="Speed Dial" description="SpeedDial is a floating button with a popup menu." componentDocs={docs} apiDocs={['Speed Dial']} />;
};

export default SpeedDialDemo;
