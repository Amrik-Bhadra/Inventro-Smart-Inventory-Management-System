
import KpiCards from "../../components/seller_components/seller_dashboard_components/KpiCards";
import {
  FaProductHunt,
  IoBagHandle,
} from "../../utils/resource/IconsProvider.util";
import { GiCardDiscard } from "react-icons/gi";
import { MdOutlinePendingActions } from "react-icons/md";

import {BarChart, DoughnutChart} from '../../utils/resource/ComponentsProvider.util'

const SellerDashboard = () => {
  return (
    <>
      <div className="kpi-cards-div w-full rounded-md py-2 flex justify-between gap-x-4">
        <KpiCards
          title="Total Products"
          description="23"
          icon={<FaProductHunt />}
        />
        <KpiCards
          title="Expired Products"
          description="145"
          icon={<GiCardDiscard/>}
        />
        <KpiCards
          title="Pending Orders"
          description="189"
          icon={<MdOutlinePendingActions />}
        />
        <KpiCards
          title="Total Orders"
          description="233"
          icon={<IoBagHandle />}
        />
      </div>

      <div className="chartdiv w-full rounded-md flex gap-x-4 mt-2">
        <BarChart/>
        <DoughnutChart/>
      </div>
    </>
  );
};

export default SellerDashboard;
