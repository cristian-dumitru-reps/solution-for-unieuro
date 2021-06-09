export class Computer {
  public id: number;
  public name: string;
  public model: string;
  public price: number;
  public type: string;
  public availabilty: number;
  public cpu: string;
  public ram: number;
  public ssd: string;
  public integrated: string;
  public gpu: string;
  public image:string;

  constructor(id: number,name: string,model: string,price: number,type: string,availabilty: number,cpu: string,ram: number,ssd: string,integrated: string,gpu: string,image:string) {
    this.id = id;
    this.name = name;
    this.model = model;
    this.price = price;
    this.type = type;
    this.availabilty = availabilty;
    this.cpu = cpu;
    this.ram = ram;
    this.ssd = ssd;
    this.integrated = integrated;
    this.gpu = gpu;
    this.image=image;
  }
}
