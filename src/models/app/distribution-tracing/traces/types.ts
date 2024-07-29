interface TracesDataModel {
  id: number
  date: string
  idNumber: string
  service: string
  operation: string
  duration: string
  method: string
  statusCode: string
  detail: TracesDetailModel
}

interface TracesDetailModel {
  otelCollectorId: string
  telemetrySdkLanguage: string
  telemetrySdkName: string
  telemetrySdkVersion: string
}

interface TracesModel {
  detail: TracesDataModel
  main: {
    data: TracesDataModel[]
    total: number
  }
}

enum TracesActionType {
  GetMainData = '⌘➝Traces➝Main➝GetMainData',
  GetDetailData = '⌘➝Traces➝Detail➝GetDetailData'
}

type TracesAction =
  | {
    data: {
      data: TracesDataModel[]
      total: number
    }
    type: TracesActionType.GetMainData
  }
  | {
    data: TracesDataModel
    type: TracesActionType.GetDetailData
  };

export { TracesActionType };
export type { TracesDataModel, TracesModel, TracesAction, TracesDetailModel };
