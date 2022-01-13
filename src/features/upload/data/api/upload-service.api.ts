import { AxiosResponse } from "axios";

import { PhotoPicker } from "../../../../core/util/upload.util";

export interface UploadService {
    uploadPhoto: (photo: PhotoPicker) => Promise<AxiosResponse<number>>;
}