interface APIGatewayDataModel {
  baseURL: string
  display: string
  name: string
  ports: string
  status: string
}

interface APIGatewayModel {
  main: {
    data: APIGatewayDataModel[]
    total: number
  }
}

enum APIGatewayActionType {
  GetMainData = '⌘➝APIGateway-Main-GetMainData'
}

interface APIGatewayAction {
  data: {
    data: APIGatewayDataModel[]
    total: number
  }
  type: APIGatewayActionType.GetMainData
}

export { APIGatewayActionType };
export type { APIGatewayDataModel, APIGatewayModel, APIGatewayAction };
