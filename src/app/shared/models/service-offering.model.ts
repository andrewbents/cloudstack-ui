import { FieldMapper } from '../decorators/field-mapper.decorator';
import { Offering } from './offering.model';


export const ServiceOfferingFields = {
  id: 'id',
  cpuNumber: 'cpuNumber',
  cpuSpeed: 'cpuSpeed',
  created: 'created',
  memory: 'memory',
  networkRate: 'networkRate',
  offerHa: 'oferHa',
  limitCpu: 'limitCpu',
  isVolatile: 'isVolatile',
  isSystem: 'isSystem',
  defaultUse: 'defaultUse',
  deploymentPlanner: 'deploymentPlanner',
  domain: 'domain',
  diskBytesReadRate: 'diskBytesReadRate',
  diskBytesWriteRate: 'diskBytesWriteRate',
  diskIopsReadRate: 'diskIopsReadRate',
  diskIopsWriteRate: 'diskIopsWriteRate'
};

@FieldMapper({
  cpunumber: 'cpuNumber',
  cpuspeed: 'cpuSpeed',
  networkrate: 'networkRate',
  displaytext: 'displayText',
  offerha: 'offerHa',
  limitcpuuse: 'limitCpu',
  isvolatile: 'isVolatile',
  hypervisorsnapshotreserve: 'hypervisorSnapshotReserve',
  deploymentplanner: 'deploymentPlanner',
  issystem: 'isSystem',
  defaultuse: 'defaultUse'
})
export class ServiceOffering extends Offering {
  public created: Date;
  public cpuNumber: number;
  public cpuSpeed: number;
  public memory: number;
  public networkRate: string;
  public offerHa: boolean;
  public limitCpu: boolean;
  public isVolatile: boolean;
  public isSystem: boolean;
  public defaultUse: boolean;
  public deploymentPlanner: string;
  public domain: string;

  constructor(json) {
    super(json);

    this.created = new Date(json.created.replace(/-/g, '/').replace(/T/g, ' '));
  }
}
